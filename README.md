# Implicit 'any' Type Bug in TypeScript

This repository demonstrates a subtle bug that can arise in TypeScript due to the implicit use of the `any` type. While the provided code functions correctly for simple inputs, it lacks type safety and could lead to unexpected errors in more complex situations.

## The Bug

The `printNumbers` function lacks explicit type definitions for its parameter `n` and its return type. This means TypeScript implicitly assigns the `any` type, which bypasses type checking. This can lead to runtime errors that could be prevented with a proper type definition.

## The Solution

The solution involves adding explicit type annotations to the function parameters and return type. This clarifies the expected input type and ensures that the function behaves as intended while enforcing type safety.