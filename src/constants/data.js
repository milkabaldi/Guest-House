
import images from './images'
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'
const arrangements = [
  {
    icon:  images.bed,
    title: 'Beds',
    txt: 'The cabin is equipped with 12 beds, 4 of which are in bunk. The rent includes linens for all beds.',
  },
  {
    icon: images.booking,
    title: 'Bedrooms',
    txt: 'Spread out over two floors, the cabin offers 4 bedrooms. Ranging from 2 to 4 beds per room.',
  },
  {
    icon:  images.bathroom,
    title: 'Bathrooms',
    txt: 'The cabin has three bathrooms, all equipped with showers and one with a bath tub,',
  },
]

const escape = [
  {
    icon: images.modern,
    title: 'Modern Kitchen Appliances',
    txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: images.air,
    title: 'Air Conditioner',
    txt: 'Nullam scelerisque aliquam odio et faucibus.',
  },
  {
    icon: images.outdoor,
    title: 'Outdoor Paths',
    txt: 'Nulla rhoncus feugiat eros quis consectetur.',
  },
  {
    icon: images.storage,
    title: 'Storage Solutions',
    txt: 'Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.',
  },
  {
    icon: images.coffee,
    title: 'Coffee Maker',
    txt: 'Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.',
  },
  {
    icon: images.cutlery,
    title: 'Cutlery Selection',
    txt: 'Duis tristique sed lorem a vestibulum.',
  },
  {
    icon: images.natural,
    title: 'Natural Scenery',
    txt: 'Cras commodo consequat orci, in convallis risus egestas non.',
  },
  {
    icon: images.takeaway,
    title: 'Take-away Options',
    txt: 'Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.',
  },
]


const together = [
  {
    icon: images.wifi,
    txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: images.bread,
    txt: 'Nullam scelerisque aliquam odio et faucibus.',
  },
  {
    icon: images.clean,
    txt: 'Nulla rhoncus feugiat eros quis consectetur.',
  },
  {
    icon: images.diner,
    txt: 'LMorbi neque ex, condimentum.',
  },
]

const opinion = [
  {
    star : <>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </> ,
    title : 'We had an amazing stay at the Guest House!',
    text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
    name : 'Nate Davidsson',
  },
  {
    star : <>
    <AiFillStar />
    <AiFillStar />
    <AiFillStar />
    <AiFillStar />
    <AiOutlineStar />
  </> ,
    title : 'Beautiful little hideaway.',
    text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
    name : 'Laura Paulie',
  },
  {
    star : <>
    <AiFillStar />
    <AiFillStar />
    <AiFillStar />
    <AiFillStar />
    <AiOutlineStar />
  </> ,
    title : 'Best vacation ever!',
    text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
    name : 'Greg Todd',
  },
  {
    star : <>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </> ,
    title : 'We had an amazing stay at the Guest House!',
    text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
    name : 'Nate Davidsson',
  },
  {
    star : <>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </> ,
    title : 'We had an amazing stay at the Guest House!',
    text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
    name : 'Nate Davidsson',
  },
  {
    star : <>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </> ,
    title : 'We had an amazing stay at the Guest House!',
    text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
    name : 'Nate Davidsson',
  },
  {
    star : <>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </> ,
    title : 'We had an amazing stay at the Guest House!',
    text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
    name : 'Nate Davidsson',
  },
]

export default { arrangements, escape, together, opinion }
