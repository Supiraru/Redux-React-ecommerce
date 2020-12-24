import React, { Component } from 'react'

class GetChild extends Component {
    render() {
        const {_id, nama, kategori, harga, deskripsi, rating, stok} = this.props.list
        return (
            <div>
                <h1>
                _id.$oid
                </h1>
                <p>
                    {_id.$oid}
                </p>
                <h1>
                    nama
                </h1>
                <p>
                    {nama}
                </p>
                <h1>
                    kategori
                </h1>
                <p>
                    {kategori}
                </p>
                <h1>
                    harga
                </h1>
                <p>
                    {harga}
                </p>
                <h1>
                    deskripsi
                </h1>
                <p>
                    {deskripsi}
                </p>
                <h1>
                    rating
                </h1>
                <p>
                    {rating}
                </p>
                <h1>
                    stok
                </h1>
                <p>
                    {stok}
                </p>
            </div>
        )
    }
}

export default GetChild
