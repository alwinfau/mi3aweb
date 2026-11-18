import './global.css'
import {Button} from "./components/ui/button.tsx";
import {ArrowRight, Download, Mail, Plus, Save, Trash} from "lucide-react";

function App() {
  return (
    <>
      {/* implementasi component button */}
      <div className={'mx-auto max-w-3xl space-y-8 p-8'}>
        <h1 className={'text-2xl font-bold'}>
          Component Button
        </h1>
        <section className={'space-y-3'}>
          <h2 className={'font-semibold'}>Variant Button</h2>
          <div className={'flex flex-wrap gap-3'}>
            <Button variant={'primary'}>Primary</Button>
            <Button variant={'secondary'}>Secondary</Button>
            <Button variant={'outline'}>Outline</Button>
            <Button variant={'ghost'}>Ghost</Button>
            <Button variant={'link'}>Link</Button>
            <Button variant={'destructive'}>Destructive</Button>
            <Button variant={'success'}>Success</Button>
            <Button variant={'warning'}>Warning</Button>
          </div>
        </section>

        <section className="space-y-3">
        <h2 className="font-semibold">Sizes</h2>
        < div className="flex flex-wrap items-center gap-3">
          <Button size="xs">Extra Small</Button>
          < Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </div>
        </section>

        <section className="space-y-3">
        <h2 className="font-semibold">|cons</h2>
            <div className="flex flex-wrap gap-3">
              <Button leftIcon={<Plus size={16} />}>
                Add New
              </Button>

              <Button variant="outline"  leftIcon={<Download size={16}/>}>
                Download
              </Button>

              <Button variant="destructive" leftIcon={<Trash size={16} />}>
                Delete
              </Button>

              <Button variant="secondary" rightIcon={<ArrowRight size={16} />}>
                Continue
              </Button>

              <Button size="icon" variant="success" aria-label="Save">
                <Save size={18} />
              </Button>
            </div>
        </section>

        <section className="space-y-3">
        <h2 className="font-semibold">Loading</h2>
        <div className="flex flex-wrap gap-3">
          < Button loading>Processing</Button>
          <Button loading loadingText="Saving.." variant="success">
            Save
          </Button>
        </div>
      </section>

        <section className="space-y-3">
          <h2 className="font-semibold">Disabled</h2>
          <Button disabled>Disabled Button</Button>
        </section>

        <section className={'space-y-3'}>
          <h2 className={'font-semibold'}>Full Width</h2>
          <Button fullWidth leftIcon={<Mail size={18}/> }>
            Send Mail
          </Button>
        </section>
      </div>
    </>
  )
}

export default App
