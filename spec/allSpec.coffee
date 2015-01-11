cp = require 'child_process'
sh = require '../lib/main'


describe 'All tests', ->

  it 'Setup for all', ->

  it 'normal #exec', ->
    code = null
    cp.exec 'echo 1', (err, stdout, stderr) ->
      code = if err then err.code else 0
    expect(code).toBeNull()

  it '#run', ->
    code = sh.run 'echo 1'
    expect(code).toBe 0

  it '#exec', ->
    res = sh.exec 'echo 1'
    expect(res.code).toBe 0
    expect(res.output.trim()).toBe '1'

  it 'Tear down for all', ->
