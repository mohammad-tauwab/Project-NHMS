import style from '../assets/css/App.module.css';

function App() {
  return (
    <><center>
      <h1 className={`${style.maintitle}`}>THis is demo page</h1>
      <h2 className={`${style.title}`}>Main Title</h2>
      <p className={`${style.para}`}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis reiciendis voluptatem neque dolorum vitae porro excepturi nisi cumque magnam harum. Error totam rerum omnis sequi. Ipsum cumque voluptas est neque!</p>
      <p className='text-2xl text-red-500'> Tailwind style </p>
      </center>
    </>
  )
}

export default App
