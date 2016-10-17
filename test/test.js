var assert = require('chai').assert
var lightbox = require('../')
var Event = require('compose-event')

describe('Lightbox', function(){
  before(function(){
    Event.fire(document, 'DOMContentLoaded')
  })

  it('has tests', function(){
    assert.equal(2 + 2, 4)
  })
})
