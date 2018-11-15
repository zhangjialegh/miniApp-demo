const { Address } = require('../model')

/***** 添加地址描述 *****/
exports.addressRecord = (User,params) => {
  return Address.create({
    userId: User.id,
    address: params.address,
    adInfo: params.ad_info,
    addressComponent: params.address_component,
    addressReference: params.address_reference,
    formattedAddresses: params.formatted_addresses,
    latitude: params.location.lat,
    longitude: params.location.lng
  })
}