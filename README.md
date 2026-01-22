# Nuxt 4 + Vue 3 + Pinia Practice Project

## Overview
This is a minimal Nuxt 4 application built with Vue 3 and Pinia, intended for **practice and refamiliarization** with the framework and state management concepts.  

The focus is on **clean architecture, state management, and SSR-aware patterns**, rather than full feature implementation.

---

## Tech Stack
- [Nuxt 4](https://nuxt.com) (Vue 3 + SSR-ready framework)
- [Vue 3](https://vuejs.org)
- [Pinia](https://pinia.vuejs.org) (state management)
- TypeScript (optional, recommended)
- Node 18+ / npm 9+

---
## Project Structure

```text
app/
├─ pages/         # Page-level components (auto-generated routes)
│  ├─ login.vue
│  └─ dashboard.vue
├─ components/    # Reusable UI components
├─ stores/        # Pinia stores
│  └─ auth.ts
│  └─ app.ts
├─ composables/   # Reusable logic hooks
├─ middleware/    # Route guards or other logic
│  └─ auth.global.ts
├─ nuxt.config.ts # Nuxt configuration
├─ package.json
├─ README.md
├─ server/
│  └─ api/        # Mock API endpoints using Nuxt Nitro
│  └─ middleware/ # Server-side route guards or other logic
```


> This structure emphasizes **separation of concerns**:
> - Global shared state → Pinia  
> - Reusable logic → Composables  
> - SSR-aware API → Nitro endpoints  
> - Local UI state → Component-level refs

## Planned Features for Practice

The project is designed to practice **Nuxt 4 + Vue 3 + Pinia patterns** in a structured way. Planned features include:

- **Authentication flow** with route middleware  
- **Users / dashboard page** using mock API  
- **Async data fetching** with Pinia + `useAsyncData`  
- **Derived state** using getters and computed properties  
- **Minimal UI** with reusable components
