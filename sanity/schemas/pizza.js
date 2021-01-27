import { MdLocalPizza as icon} from 'react-icons/md'; //icons library

import PriceInput from '../components/PriceInput';

export default {
  // Computer name - singular and lower case
  name: 'pizza',
  // Visible title
  title: 'Pizzas',
  type: 'document',
  // we can pass any React component here:
  // icon: () => '🍕',
  icon: icon,
  fields: [
    {
      // Field name 
      name: 'name',
      // Visible field title
      title: 'Pizza name',
      type: 'string',
      description: 'Name of the pizza',
    },
    {
      // Slug is the end of URL and here we generate it from the name, so for example the slug for 'Pepperoni Pizza' will look like 'pepperoni-pizza'
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        // This is the part of the image that will always be centered regardless of the image dimensions/orientation
        hotspot: true,
      }
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the pizza in cents',
      inputComponent: PriceInput,
      // Sanity allows to validate data, for example we can make sure the pizza prices are always $10-50 (you can use any logic you want. 'Rule' is an object that provides several common validation methods 
      validation: Rule => Rule.min(1000).max(5000),
    },
    //* Adding custom toppings selector field 
    // "One to many relationship"
    // we need to create a relationship between pizza data and toppings data, thus its type is an array of references (to documents of type 'topping')
    // This allows us to select from a list of toppings created by the user
    {
      name: 'toppings',
      title: 'Toppings',
      type: 'array',
      of: [{ 
        type: 'reference', 
        to: [{
          type: 'topping',
        }]  
      }]
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      // we want to select name of the topping, not it's reference key 
      // we are displaying the first 4 toppings from the array
      ////toppings: 'toppings'
      topping0: 'toppings.0.name', // syntax from the docs
      topping1: 'toppings.1.name', 
      topping2: 'toppings.2.name', 
      topping3: 'toppings.3.name', 
    },
    // To console log:
    // prepare: (fields) => {
    //   console.log(fields);
    //   return 'pizza name';
    // }
    //
    // using destructuring:
    // '...toppings' will capture anything left after destructuring into a new object 'toppings'
    prepare: ({ title, media, ...toppings }) => {
      // 1. If the pizza has less than 4 toppings, these toppings will be listed as 'undefined'. We want to filter them out to avoid extra commas in the subtitle. First convert toppings obj to array using Object.values(), then filter out falsy values
      // remember, .filter() returns only truthy values, and 'Boolean' accesses whether a boolean is T/F
      // another way to do this is .filter(toppings => topping !== undefined)
      const tops  = Object.values(toppings).filter(Boolean);
      // 2. return preview objects
      return {
        title, // same as 'title: title'
        media,
        subtitle: tops.join(', ') 
      };
    }
  }
}