const express = require('express')
const app = express()
const { createClient } = require("@supabase/supabase-js");
const dotenv = require('dotenv')

dotenv.config();



const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);
console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Service Key:', supabaseKey);

module.exports = supabase