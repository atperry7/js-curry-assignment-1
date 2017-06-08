'use strict'

const listing =
  (name, price) => ({
    name,
    price
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

const listedPrice =
  listing =>
    name =>
      name === listing.name
        ? listing.price
        : 0

const itemChecker = (list, item) => {
  return list.name === item ? listing.price : 0
}


const customerItemsTotal = (listings, items) => {
  let total = 0
  for (var i = 0; i < listings.length; i++) {
    for (var j = 0; j < items.length; j++) {
       if (listings[i].name === items[j]) {
         total = total + listings[i].price
       }
    }
  }

  return total
}

const customerObjectCreater = (cust, listings) => {
  let customerObject = {name: '', total: 0}
  let total = customerItemsTotal(listings, cust.items)
  customerObject.name = cust.customer
  customerObject.total = total
  return customerObject
}


/**
 * transform carts into an array of { customer, total }
 */
const calculateTotals =
  listings =>
    carts => {
      const customers = []
      for (let cart of carts) {
        customers.push(customerObjectCreater(cart, listings))
      }
      return customers
    }

module.exports = {
  listing,
  cart,
  calculateTotals
}
