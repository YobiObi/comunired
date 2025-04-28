import React, { useState } from 'react';
import { isValidEmail, isValidPassword } from '../utils/validators';

export function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio.';
    }
    if (!isValidEmail(formData.email)) {
      newErrors.email = 'El correo no es válido.';
    }
    if (!isValidPassword(formData.password)) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Aquí luego llamaremos a authService.register(formData)
      console.log('Formulario válido, enviando datos:', formData);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Crear cuenta</h2>

        <div className="mb-4">
          <label className="block text-gray-700">Nombre</label>
          <input
            type="text"
            name="name"
            className="mt-1 w-full p-2 border border-gray-300 rounded"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Correo electrónico</label>
          <input
            type="email"
            name="email"
            className="mt-1 w-full p-2 border border-gray-300 rounded"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700">Contraseña</label>
          <input
            type="password"
            name="password"
            className="mt-1 w-full p-2 border border-gray-300 rounded"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}
