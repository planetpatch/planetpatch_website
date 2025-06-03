import Breadcrumbs from "@/components/ui/breadcrumbs";

export default function Page() {
 
    
    return (
        <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Projects', href: '/projects' },
          {
            label: `View Energy Tracker`,
            href: `/dashboard/clients/energy-tracker`,
            active: true,
          },
        ]}
      />

            
        </main>
    )
}