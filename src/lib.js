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

const figureOutTotal = (listing, items) => {
  const listingTest = listedPrice(listing)
  let total
  let totals = 0
  for (let item of items) {
    total = Number(listingTest(item))
    totals = totals + total
  }
  return totals
}

const customerObjectCreater = (cust, listings) => {
  let customerObject = {total: 0}
  customerObject = cust
  let aNewTotal = listings.reduce(list => figureOutTotal(list, cust.items))

  let total = customerItemsTotal(listings, cust.items)
  customerObject.total = total
  return customerObject
}

/**
 * transform carts into an array of { customer, total }
 */
const calculateTotals =
  listings =>
    carts => {
      return carts.map((custo) => { return customerObjectCreater(custo, listings) })
    }

module.exports = {
  listing,
  cart,
  calculateTotals
}
