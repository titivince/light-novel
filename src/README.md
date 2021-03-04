# Light Novel

In the `src/` folder you will find two type of file `Typescript` and `css`

## The Typescript files

You will find two file the `core.ts` and `text.ts`, in the first one you don't have anything to do but in the second one you have to code but don't worry it's easy.

### Here a basic example

- **Text only**

```typescript
if (currentText == n++) { // the var n incremented n = 1
  mc.text = "This is the first text";
}
if (currentText == n++) { // the var n incremented n = 2
  mc.name = 'The first character'; // the name will stay if you don't change it
  mc.text = 'Hello i\'m the second text';
}
```
the first `if` change the text ,the second `if` change the name and the text

- **Add and remove class**

I take the same example

```typescript
if (currentText == n++) { // the var n incremented n = 1
  mc.text = "This is the first text";
  character1.classList.add('char_move_in'); // add the animation to the caracter1
}
if (currentText == n++) { // the var n incremented n = 2
  mc.name = 'The first character'; // the name will stay if you don't change it
  mc.text = 'Hello i\'m the second text';
  character1.classList.remove('char_move_in'); // remove the class of the character1
  // or you can remove all class
  character1.className = "";
}
```

## The css files

You will find two file `style.css` and `animation.css` in the first one you will find the basic style and the responsive you will need to modify it. In the second one you will find all the animation and their classes