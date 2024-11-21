import React, { useEffect, useRef } from 'react'

const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext('webgl')
    if (!gl) {
      console.error('WebGL not supported')
      return
    }

    // Shader source
    const vertexShaderSource = `
      attribute vec4 a_position;
      void main() {
        gl_Position = a_position;
      }
    `

    const fragmentShaderSource = `
      precision mediump float;

      uniform vec2 resolution;
      uniform float time;

      void main() {
          vec2 uv = gl_FragCoord.xy / resolution - 0.5;
          uv.x *= resolution.x / resolution.y;
          uv *= 10.0;
          float a = uv.x + sin(cos(time / 5.0) * 19.0 * uv.y);
          float b = uv.y - sin(cos(time / 5.0) * 19.0 * uv.x);
          float f = a * sin(time) - b * cos(time);
          float v = smoothstep(0.3, 0.7, f);

          // Define colors: black and dark purple
          vec3 color1 = vec3(0.0, 0.0, 0.0); // Black
          vec3 color2 = vec3(0.4, 0.0, 0.5); // Dark purple

          // Interpolate between colors
          vec3 color = mix(color1, color2, v);
          gl_FragColor = vec4(color, 1.0);
      }
    `

    // Create shaders
    const createShader = (type: number, source: string) => {
      const shader = gl.createShader(type)
      if (!shader) throw new Error('Failed to create shader')
      gl.shaderSource(shader, source)
      gl.compileShader(shader)

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader))
        gl.deleteShader(shader)
        throw new Error('Failed to compile shader')
      }
      return shader
    }

    const vertexShader = createShader(gl.VERTEX_SHADER, vertexShaderSource)
    const fragmentShader = createShader(
      gl.FRAGMENT_SHADER,
      fragmentShaderSource
    )

    // Create program
    const program = gl.createProgram()
    if (!program) throw new Error('Failed to create program')

    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program))
      gl.deleteProgram(program)
      throw new Error('Failed to link program')
    }

    gl.useProgram(program)

    // Set up geometry
    const positionBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, -1, 1, 1, -1, 1]),
      gl.STATIC_DRAW
    )

    const positionLocation = gl.getAttribLocation(program, 'a_position')
    gl.enableVertexAttribArray(positionLocation)
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

    // Uniform locations
    const resolutionLocation = gl.getUniformLocation(program, 'resolution')
    const timeLocation = gl.getUniformLocation(program, 'time')

    // Render loop
    const startTime = performance.now()
    const render = () => {
      const now = performance.now()
      const time = (now - startTime) / 1000

      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)
      gl.clearColor(0, 0, 0, 0)
      gl.clear(gl.COLOR_BUFFER_BIT)

      // Set uniforms
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height)
      gl.uniform1f(timeLocation, time)

      // Draw
      gl.drawArrays(gl.TRIANGLES, 0, 6)

      requestAnimationFrame(render)
    }

    // Resize canvas to fit its container
    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (!parent) return
      canvas.width = parent.clientWidth
      canvas.height = parent.clientHeight
      gl.viewport(0, 0, canvas.width, canvas.height)
    }

    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()

    render()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className='absolute h-full w-full' />
}

export default ParticleCanvas
