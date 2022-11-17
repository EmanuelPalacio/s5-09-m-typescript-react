import { Request, Response } from 'express'
import { IResponse } from '../../interfaces/response'

// import { generateJWT } from '../../utils/jwt'
import { loginService } from '../../services/auth/loginService'
import { validatePassword } from '../../utils/validatePassword'

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body

    try {
        const { ok, msg, status, user } = (await loginService(
            email
        )) as IResponse

        //*Comprobar que el email este en la base de datos
        if (!ok) {
            return res.status(status).json({ ok: false, msg: msg })
        }

        //* Comprobar que las contraseñas coincidan
        const validPassword = await validatePassword(password, user.password)

        if (!validPassword) {
            return res.status(404).json({
                ok: false,
                msg: 'Password Incorrecta',
            })
        }

        //todo Crear JWT

        // const token = await generateJWT(user.id, user.admin)

        return res.status(200).json({
            ok: true,
            msg: 'Usuario logeado',
            //token,
            id: user._id,
            admin: user.admin,
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Ocurrio un error, contacta con un administrador',
        })
    }
}
