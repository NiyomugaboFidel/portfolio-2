import React from 'react'
 
const Projects = () => {
  const projects  = [
    {
      desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidemmollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atquedignissimos Molestias explicabo corporis voluptatem',
      name:'Lorem ipsum dolor sit amet',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzhJB1Y6VP7niy8o6M1HM3ElVvqpBdm5RvS1GZ6eGhoiWjrQUMn-UezYv0AO-XNNkEH6s&usqp=CAU'
    },  {
      desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidemmollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atquedignissimos Molestias explicabo corporis voluptatem',
      name:'Lorem ipsum dolor sit amet',
      image:'https://cdn2.editmysite.com/images/landing-pages/global/home-com-forward/themes/design-s.png'
    },  {
      desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidemmollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atquedignissimos Molestias explicabo corporis voluptatem',
      name:'Lorem ipsum dolor sit amet',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIodhiAkgwAK-ejV5pEz_dIBzwletpSSx6fIHl0CuJdYexof8BbxR8LmAIsO6WAUABBmk&usqp=CAU'
    }, {
      desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidemmollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atquedignissimos Molestias explicabo corporis voluptatem',
      name:'Lorem ipsum dolor sit amet',
      image:'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/08/Empire-Flippers-an-online-business-marketplace.webp'
    },
  ]
  return (
  <div id='projects' className='px-5'>
  <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
   {
    projects.map(item =>{
      return(
        <div class="">{/*
          Heads up! 👋
        
          This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
        */}
        
        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
          <img
            alt=""
            src={item.image}
            className="h-56 w-full object-cover"
          />
        
          <div className="p-4 sm:p-6">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900">
                {item.name}
              </h3>
            </a>
        
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            {item.desc}
            </p>
        
            <a href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
              Find out more
        
              <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                &rarr;
              </span>
            </a>
          </div>
        </article></div>
      )
    })
   }
</div>
    </div>
  )
}

export default Projects