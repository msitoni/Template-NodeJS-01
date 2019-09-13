global.fetch = require('node-fetch');


import { search } from '../src/util/Util';


const albums = search('Incubus', 'artist');

albums.then(data => console.log(data));
