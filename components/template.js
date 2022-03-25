import Navigation from './navigation'

const Template = ({ children }) => {
  return (
    <>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/cyborg/bootstrap.min.css" integrity="sha384-nEnU7Ae+3lD52AK+RGNzgieBWMnEfgTbRHIwEvp1XXPdqdO6uLTd/NwXbzboqjc2" crossorigin="anonymous"></link>
      </head>
      <div>
        <h1 className='text-center mt-4'>Next App</h1>
        <Navigation />
        <div className="container mt-5">
          {children}
        </div>
      </div>
    </>
  )
}

export default Template