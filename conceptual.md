### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

   React is a front-end framework to build UI's. It helps build UI's quickly and efficenitly compared to vanilla JS

- What is Babel?

Babel is a Javascipt compiler thats helps convert code into legal JavaScript

- What is JSX?

JSX is a new gen type of JavaScript that shares alot of similarities to HTML

- How is a Component created in React?

A component is created by creating a function that knows how to render itself

- What are some difference between state and props?

Props is data passed to a component while state is data specific to a component. Also state can change while props are immutable 

- What does "downward data flow" refer to in React?
 Downward data flow is the idea that parent component can pass data down to their children via props

- What is a controlled component?

A controlled component is a component controlled by React state

- What is an uncontrolled component?

A component that controls its own internal state

- What is the purpose of the `key` prop when rendering a list of components?

the purpose of the key prop is so the library knows whether or not the component should be re-rendered

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

An array is not a good idea because an array might not be static and can change. This could lead to re-rendering the wrong element

- Describe useEffect.  What use cases is it used for in React components?

useEffect is a built in hook that allows you to do side effects on your components. It can help manually update the DOM, fetch data, and start timers

- What does useRef do?  Does a change to a ref value cause a rerender of a component?

useRef allows you to persist values between renders. No a change to the ref value doesn't cause a rerender

- When would you use a ref? When wouldn't you use one?

You would use a ref when you want to access a DOM element directly and not re-render. You wouldnt use a ref if you need a re-render in your component

- What is a custom hook in React? When would you want to write one?

A custom hook is a Javascript function that uses built in hooks. You'd want to write one when you want to reuse a hook across multiple components.
