export default async (req, res) => {
    if (req.method == 'GET') {
        const totalSupply = 840000000

        const circAllocations = {
            raise: 233961218.37375628719,
            lp: 10000000
        }

        res.status(200).send(Object.values(circAllocations).reduce((c, i) => c + i));
    }
};