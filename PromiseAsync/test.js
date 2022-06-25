class Test {
    testArray = new Array()

    async doWork() {
        for(let i = 0; i < 200000; i++)
        {
            await this.add(i)
        }

        for(let i = 0; i < 10000; i++)
        {
            await this.testArray.shift()
            //this.removeFirst()
        }
        if(1)
            throw 500
        else
            return this.testArray
    }

    doWork2() {
        return new Promise(async (resolve, reject) => {
            for(let i = 0; i < 200000; i++)
            {
                await this.add(i)
            }

            for(let i = 0; i < 10000; i++)
            {
                await this.testArray.shift()
                //this.removeFirst()
            }
            if(1)
                reject(500)
            else
                resolve(this.testArray)
        })
    }

    async add(number)
    {
        this.testArray.push(number)
    }

    async removeFirst()
    {
        this.testArray.shift()
    }

    getArray()
    {
        return this.testArray
    }

}


module.exports = Test // 👈 Export class