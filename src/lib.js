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

const listingsBreakDown =
  listings =>
    item =>
       listings.reduce((total, current) => { return total + listedPrice(current)(item) }, 0)

/**
 * transform carts into an array of { customer, total }
 */
const calculateTotals =
  listings =>
    carts => {
      const listingsTest = listingsBreakDown(listings)

      return carts.map((custo) =>
      { return { customer: custo.customer, total: custo.items.reduce((total, item) => { return total + listingsTest(item) }, 0) } })
    }

module.exports = {
  listing,
  cart,
  calculateTotals
}
