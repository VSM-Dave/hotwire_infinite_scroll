// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import "@hotwired/turbo-rails"
require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")
import LocalTime from "local-time"
LocalTime.start()


window.Rails = Rails

import 'bootstrap'
import 'data-confirm-modal'

$(document).on("turbo:load", () => {
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="popover"]').popover()
})
