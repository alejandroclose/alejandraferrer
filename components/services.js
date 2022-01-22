/* This example requires Tailwind CSS v2.0+ */
import {
  ChatAltIcon,
  DocumentReportIcon,
  HeartIcon,
  InboxIcon,
  PencilAltIcon,
  ReplyIcon,
  TrashIcon,
  UsersIcon,
} from '@heroicons/react/outline'


const fashion_services = [
  {
    name: 'Trend Report',
    icon: '/icons/trend_report.png',
  },
  {
    name: 'Color Card',
    icon: '/icons/color_card.png',
  },
    {name: 'Fabric Advice & Selection',
  icon: '/icons/fabric_selection.png'},
  {
    name: 'Collection Design & Moodboards',
    icon: '/icons/collection_design.png',
  },
  {
    name: 'Flat Drawings',
    icon: '/icons/flat_drawings.png',
  },
  {
    name: 'Tech Packs',
    icon: '/icons/tech_packs.png',
  },
  {
    name: 'Meetings with clients',
    icon: '/icons/meetings.png',
  },
  {
    name: 'Print Design',
    icon: '/icons/print_design.png',
  },
  {
    name: 'Embroidery Design',
    icon: '/icons/embroidery.png',
  },
  {
    name: 'Inspirational Shopping',
    icon: '/icons/inspirational_shopping.png',
  },
]
const design_services = [
  {
    name: 'Logo & Brand Identity',
    icon: '/icons/logos.png',
  },
  {
    name: 'Web Design',
    icon: '/icons/web_design.png',
  },
  {
    name: 'Stationery',
    icon: '/icons/stationery.png',
  },
  {
    name: 'Ad materials',
    icon: '/icons/ad_materials.png',
  },
  {
    name: 'Illustraation',
    icon: '/icons/illustration.png',
  },
]

export default function Services() {
  return (
    <div className="font-montserrat mt-12">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-3xl lg:pt-24 lg:px-8">
        <h2 id="services" className="font-abril font-normal text-gray-900 text-2xl text-center">·  KEY SERVICES  ·</h2>
        <p className="mt-4 max-w-3xl text-sm text-center">
          Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. 
        </p>
        <div>
        <h3 className="font-abril font-normal text-gray-900 text-2xl mt-6 border-dashed border-sand-500 border-t-2 border-b-2">
          Fashion Design</h3>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-6 lg:gap-y-8">
          {fashion_services.map((service) => (
            <div className="w-36 flex flex-col items-center text-center hover:text-sand-500" key={service.name}>
              <div>
                <span className="flex items-center justify-center h-12 w-16 rounded-md bg-white bg-opacity-10">
                  <img src={service.icon} className="h-8 w-9" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-2">
                <h3 className="text-sm text-gray-500">{service.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
        <h3 className="font-abril font-normal text-gray-900 text-2xl mt-6 border-dashed border-sand-500 border-t-2 border-b-2">
          Graphic Design, Art Direction & Illustration</h3>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-6 lg:gap-y-8">
          {design_services.map((service) => (
            <div className="w-36 flex flex-col items-center text-center hover:text-sand-500" key={service.name}>
              <div>
                <span className="flex items-center justify-center h-12 w-16 rounded-md bg-white bg-opacity-10">
                  <img src={service.icon} className="h-8 w-9" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-2">
                <h3 className="text-sm text-gray-500">{service.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
