import {add,multi} from '@/utils/calc.js';
import '@/styles/common.less'
import axios from 'axios';

const instance=axios.create({
  base:'http://localhost:3000'
})
console.log(instance)
const input=document.querySelector('input')
input.type='date'
console.log(process.env.NODE_ENV)