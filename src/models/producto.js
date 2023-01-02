import mongoose from 'mongoose'

const ProductoShema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    existencia: {
        type: Number,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    creado: {
        type: Date,
        default: Date.now()
    }
})

export const Producto = mongoose.model('Producto', ProductoShema)