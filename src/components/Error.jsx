
const Error = ({children}) => {//Con children obtenemos cualquier tipo de dato se pueden enviar funciones, código html ,etc
  return (
    <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
  {children}
  </div>
  )
}

export default Error
