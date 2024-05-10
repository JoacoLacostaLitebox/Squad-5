import FukuPointModel from "../models/fukupoint";

export const getUserFukuPoints = async (userId: string): Promise<{ fukupoints: number }> => {
    const existingUser = await FukuPointModel.findOne({ userId: userId })

    if(!existingUser) {
        return {
            fukupoints: 0
        }
    }

    return {
        fukupoints: existingUser.amount
    }
};

export const addFukuPoints = async (body: { fukupoints: number, userId: string }): Promise<{ fukupoints: number }> => {
    const { fukupoints, userId } = body;
    const existingUser = await FukuPointModel.findOne({ userId })

    if(existingUser) {
        const totalPoints = existingUser.amount + fukupoints
        await FukuPointModel.updateOne({ userId }, { amount: totalPoints })
        return { fukupoints: totalPoints }
    } else {
        await FukuPointModel.create({ userId, amount: fukupoints })
        return { fukupoints }
    }
}