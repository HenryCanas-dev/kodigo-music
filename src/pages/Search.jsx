import { useForm } from 'react-hook-form';

const Search = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert(`Búsqueda enviada: ${data.query}`); // Funcionalidad extra
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4">Búsqueda</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register('query', { 
            required: 'Este campo es requerido', 
            minLength: { value: 3, message: 'Mínimo 3 caracteres' } 
          })}
          placeholder="Busca canciones..."
          className="w-full p-2 bg-gray-800 rounded text-white border border-gray-700 focus:outline-none focus:border-green-500"
        />
        {errors.query && <p className="text-red-500 text-sm">{errors.query.message}</p>}
        <button type="submit" className="w-full bg-green-500 p-2 rounded hover:bg-green-600 transition">
          Buscar
        </button>
      </form>
    </div>
  );
};

export default Search;