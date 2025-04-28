// src/services/authService.js

const fakeUser = {
    email: 'test@comunired.com',
    password: '123456',
    name: 'Usuario Demo',
  };
  
  // Simular login
  export async function login({ email, password }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === fakeUser.email && password === fakeUser.password) {
          resolve({ email: fakeUser.email, name: fakeUser.name, token: 'fake-jwt-token' });
        } else {
          reject(new Error('Correo o contraseña incorrectos.'));
        }
      }, 1000); // Simulamos 1 segundo de espera
    });
  }
  
  // Simular logout
  export async function logout() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 500); // Simulamos 0.5 segundos de espera
    });
  }
  
  // Guardar el usuario en localStorage
  export function saveUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  
  // Obtener el usuario guardado
  export function getUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
  
  // Eliminar usuario guardado
  export function removeUser() {
    localStorage.removeItem('user');
  }
  