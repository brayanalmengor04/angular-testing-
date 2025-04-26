# 🧠 Bitácora de Aprendizaje - Angular & TypeScript
Este repositorio sirve como un diario de lo que voy aprendiendo día a día mientras practico Angular, TypeScript y testing. Cada entrada está organizada por fecha y tema.
---
## 📅 04/25/2025 - Decoradores en TypeScript

### ✨ Temas del día
- Decoradores de clase, método, propiedad y parámetros
- Cómo crear e implementar decoradores personalizados

### 📘 Lo que aprendí
- Los decoradores en TypeScript son funciones especiales que se aplican a clases, métodos, propiedades o parámetros para modificar su comportamiento.
- Ejemplo de decorador de método para registrar entrada/salida:
  ```ts
  function Logged(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(`Invocando ${key} con`, args);
      const result = originalMethod.apply(this, args);
      console.log(`Resultado:`, result);
      return result;
    };
  }
  ```
- Los decoradores permiten añadir funcionalidades sin modificar directamente el código original.
---
## 📅 04/26/2025 - Elementos Angular
### ✨ Temas del día
- 

### 📘 Lo que aprendí
- [Describe lo que comprendiste, descubriste o implementaste]

---
> “Aprender es un proceso, no una meta. Lo importante es no dejar de avanzar.” 🚀
