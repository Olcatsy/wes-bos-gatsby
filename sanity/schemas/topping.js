import { FaPepperHot as icon } from 'react-icons/fa';

// VS CODE TIP: to select multiple instances of one word, double click on the word and press CTRL+D to select the next instance

export default {
  // Computer name
  name: 'topping',
  // Visible title
  title: 'Toppings',
  type: 'document',
  // we can pass any React component here:
  // icon: () => '🍕',
  icon: icon,
  fields: [
    {
      // This fields prompts to type topping name and saves it to the database (e.g. in the database it will look like 'name: pepperoni')
      name: 'name',
      title: 'Topping name',
      type: 'string',
      description: 'What is the name of the topping?',
    },
    {
      // In the database it will look like e.g. 'vegetarian: false'
      name: 'vegetarian',
      title: 'Vegetarian',
      type: 'boolean',
      description: 'Is this vegetarian?',
      options: {
        layout: 'checkbox'
      }
    },
  ],
  // https://www.sanity.io/docs/previews-list-views
  // This controls how the toppings show up in SanityStudio GUI
  preview: {
    select: {
      // Selects the fields you want to use to generate the preview
      name: 'name',
      vegetarian: 'vegetarian',
    },
    // this is where the preview is generated
    // return an object with the title
    prepare: fields => ({
      title: `${fields.name} ${fields.vegetarian ? '🍃' : ''}` // a leaf will be displayed next to the name for veg options
    }),
    // using destructuring
    // prepare: ({name, vegetarian}) => ({
    //   title: `${name} ${vegetarian ? '🍃' : ''}` // a leaf will be displayed next to the name for veg options
    // }),
  }
}