import Div from '@/components/div'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const Page: React.FC = () => {
  return (
    <>
      <p className='py-8 text-center text-xl'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
        obcaecati totam cons ectetur voluptate, ad,
        <br /> accusantium atque as periores praesentium, enim expedita vel ex
        earum quis? Laborum esse et doloribus vitae a!
      </p>
      <div id='headline-cont'>
        <div>By Jane Jones</div>
        <div> 3 minute read Updated 9:54 PM EST, Thu November 7, 2024</div>
      </div>
      <div id='article'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, iusto
        quidem, quaerat minima incidunt sed <br /> iste distinctio vel
        repudiandae totam, officiis unde obcaecati? Dicta accusamus eligendi
        aspernatur necessitatibus nulla fugiat.lore Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Dignissimos at quam accusamus provident
        commodi <br /> reiciendis ex delectus laboriosam impedit numquam,
        laudantium architecto? Consequuntur dolorum ex tenetur unde, eius
        molestiae nulla. Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Porro rerum quae, sapiente iusto ducimus excepturi fuga vitae
        molestias at harum, tempora itaque repudiandae repellat voluptatum hic
        ullam saepe, quos amet.
      </div>
      <Div className='grid w-full gap-2 text-center'>
        <Textarea placeholder='Type your message here.' />
        <Button>Send message</Button>
      </Div>
      <div className='flex w-full max-w-sm items-center space-x-2'>
        <Input type='email' placeholder='Email' />
        <Button type='submit'>Subscribe To NewsLetter</Button>
      </div>
    </>
  )
}
export default Page
