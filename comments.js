//create web server
var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');
var Post = require('../models/post');
var User = require('../models/user');
var mongoose = require('mongoose');
var passport = require('passport');
