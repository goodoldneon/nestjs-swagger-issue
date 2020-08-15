This repo demonstrates an issue with `@nestjs/swagger`.

## Reproduction

1. Start the server.
   - `npm run start`
2. Browse to http://localhost:3100/docz.
3. For `GET /foo`, the response schema is visible. This is desirable.
4. For `GET /bar`, the response schema is not visible. This is not desirable.

## Cause

Naming a controller file `controller.ts` prevents the response schema from rendering. It appears as though controllers must have names that adhere to the `*.controller.ts` convention.

The `*.controller.ts` convention is implicitly encouraged in NestJS, both via its docs and CLI-generated files. However, adhering to that convention can cause readability issues with long resource names. Glancing at the project structure is easier without the `*.controller.ts` convention.

The following structure:

```
src/
  plant-air-reading-relations/
    plant-air-reading-relation.entity.ts
    plant-air-reading-relation.repository.ts
    plant-air-reading-relations.controller.ts
    plant-air-reading-relations.module.ts
    plant-air-reading-relations.service.ts
```

Is less readable than this structure:

```
src/
  plant-air-reading-relations/
    entity.ts
    repository.ts
    controller.ts
    module.ts
    service.ts
```