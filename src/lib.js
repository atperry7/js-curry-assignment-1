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

/**
 * transform carts into an array of { customer, total }
 */
const calculateTotals =
  listings =>
    carts => {
      const listingsTest = listedPrice(listings)
      return carts.map((custo) => { return { customer: custo.customer, total: custo.items.reduce((total, item) =>
        { return total + listings.reduce((total, listing) =>
          { return total + listedPrice(listing)(item) }, 0) }, 0) }
      })
    }

module.exports = {
  listing,
  cart,
  calculateTotals
}
