'use strict'

const extend = require('extend-shallow')
const Liquid = require('liquid-node')

const engine = new Liquid.Engine()

exports.name = 'liquid'
exports.outputFormat = 'html'

exports.renderAsync = function (str, options, locals) {
  return engine.parseAndRender(str, extend({}, options, locals))
}

/**
 * Compile the template asyncronously.
 *
 * TODO: Fix tests for this https://github.com/jstransformers/jstransformer/issues/79
exports.compileAsync = function (str, options) {
  return new Promise(function (resolve, reject) {
    engine.parse(str).then(function (template) {
      template.fn = template.render
      template.dependencies = []
      resolve(template)
    }).catch(reject)
  })
}
*/
