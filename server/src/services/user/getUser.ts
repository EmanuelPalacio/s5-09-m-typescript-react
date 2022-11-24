import User from '../../models/User'

export const getUserService = async (id: string) => {
    try {
        const userRetrieved = await User.findById({ _id: id })

        if (userRetrieved) {
            const { fullname, email, _id } = userRetrieved

            const response = {
                msg: 'User finded with success',
                status: 200,
                ok: true,
                user: { fullname, email, _id },
            }
            return response
        }

        const response = {
            status: 404,
            msg: 'Cannot find user with this id',
            ok: false,
        }

        return response
    } catch (error) {
        return error
    }
}