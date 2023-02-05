const Subscription = {
    count : {
        subscribe (parent, args, {pubsub }, info) {
            let count = 0
            setInterval(() => {
                count++
                pubsub.publish('count', {
                    count
                })
            },1000)
            return pubsub.asyncIterator('count')
        }
    },
    hotel: {
        subscribe (parent,args, {pubsub}, info) {
            return pubsub.asyncIterator('hotel')
        }
    },
    amenities: {
        subscribe(parent, args, { pubsub }, info) {
            console.log(pubsub.asyncIterator('amenities'));
            return pubsub.asyncIterator('amenities')
        }
    }
}

export { Subscription as default}