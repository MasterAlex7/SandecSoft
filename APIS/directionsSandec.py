# Import libraries
from flask_cors import CORS, cross_origin

import os
import sys
import Backend.FunctionsSandec as callMethod

from flask import Flask, jsonify, request, url_for, Response

import json

app = Flask(__name__)
CORS(app)

###################################################################
# USUARIOS
###################################################################

@app.route('/sandec/nuevaCategoria', methods=['POST'])
def postCategoria():
    try:
        strNombre = request.json['strNombre'] if ('strNombre' in request.json) else None
        strDescripcion = request.json['strDescripcion'] if ('strDescripcion' in request.json) else None
        strStatus = request.json['strStatus'] if ('strStatus' in request.json) else None
        objResult = callMethod.fnPostCategoria(strNombre, strDescripcion, strStatus)
        return jsonify(objResult)
    except Exception as e:
        print("Error Post Categorias: ",e)

@app.route('/sandec/nuevoCliente', methods=['POST'])
def postCliente():
    try:
        strNombre = request.json['strNombre'] if ('strNombre' in request.json) else None
        strDireccion = request.json['strDireccion'] if ('strDireccion' in request.json) else None
        strTelefono = request.json['strTelefono'] if ('strTelefono' in request.json) else None
        strEmail = request.json['strEmail'] if ('strEmail' in request.json) else None
        strStatus = request.json['strStatus'] if ('strStatus' in request.json) else None
        objResult = callMethod.fnPostCliente(strNombre, strDireccion, strTelefono, strEmail, strStatus)
        return jsonify(objResult)
    except Exception as e:
        print("Error Post Clientes: ",e)

@app.route('/sandec/nuevaCompra', methods=['POST'])
def postCompra():
    try:
        intIdProveedor = request.json['intIdProveedor'] if ('intIdProveedor' in request.json) else None
        floatTotalCompra = request.json['floatTotalCompra'] if ('floatTotalCompra' in request.json) else None
        strStatus = request.json['strStatus'] if ('strStatus' in request.json) else None
        arrayProductos = request.json['arrayProductos'] if ('arrayProductos' in request.json) else None
        objResult = callMethod.fnPostCompra(intIdProveedor, floatTotalCompra,arrayProductos, strStatus)
        return jsonify(objResult)
    except Exception as e:
        print("Error Post Compra: ",e)

@app.route('/sandec/nuevaVenta', methods=['POST'])
def postVenta():
    try:
        intIdCliente = request.json['intIdCliente'] if ('intIdCliente' in request.json) else None
        floatTotalVenta = request.json['floatTotalVenta'] if ('floatTotalVenta' in request.json) else None
        strStatus = request.json['strStatus'] if ('strStatus' in request.json) else None
        arrayProductos = request.json['arrayProductos'] if ('arrayProductos' in request.json) else None
        objResult = callMethod.fnPostVenta(intIdCliente, floatTotalVenta,arrayProductos, strStatus)
        return jsonify(objResult)
    except Exception as e:
        print("Error Post Venta: ",e)

@app.route('/sandec/nuevoPrestamo', methods=['POST'])
def postPrestamo():
    try:
        intIdVendedor = request.json['intIdVendedor'] if ('intIdVendedor' in request.json) else None
        arrayProductos = request.json['arrayProductos'] if ('arrayProductos' in request.json) else None
        strStatus = request.json['strStatus'] if ('strStatus' in request.json) else None
        objResult = callMethod.fnPostPrestamo(intIdVendedor, arrayProductos, strStatus)
        return jsonify(objResult)
    except Exception as e:
        print("Error Post Prestamo: ",e)

@app.route('/sandec/nuevoProducto', methods=['POST'])
def postProducto():
    try:
        strNombre = request.json['strNombre'] if ('strNombre' in request.json) else None
        strDescripcion = request.json['strDescripcion'] if ('strDescripcion' in request.json) else None
        floatPrecioCompra = request.json['floatPrecioCompra'] if ('floatPrecioCompra' in request.json) else None
        floatPrecioVenta = request.json['floatPrecioVenta'] if ('floatPrecioVenta' in request.json) else None
        intCantidadStock = request.json['intCantidadStock'] if ('intCantidadStock' in request.json) else None
        intCantidadMinima = request.json['intCantidadMinima'] if ('intCantidadMinima' in request.json) else None
        intIdCategoria = request.json['intIdCategoria'] if ('intIdCategoria' in request.json) else None
        strImg = request.json['strImg'] if ('strImg' in request.json) else None
        strStatus = request.json['strStatus'] if ('strStatus' in request.json) else None
        objResult = callMethod.fnPostProducto(strNombre, strDescripcion, floatPrecioCompra, 
                                            floatPrecioVenta, intCantidadStock, intCantidadMinima, 
                                            intIdCategoria, strImg, strStatus)
        return jsonify(objResult)
    except Exception as e:
        print("Error Post Producto: ",e)

@app.route('/sandec/nuevoProveedor', methods=['POST'])
def postProveedor():
    try:
        strNombre = request.json['strNombre'] if ('strNombre' in request.json) else None
        strDireccion = request.json['strDireccion'] if ('strDireccion' in request.json) else None
        strTelefono = request.json['strTelefono'] if ('strTelefono' in request.json) else None
        strEmail = request.json['strEmail'] if ('strEmail' in request.json) else None
        strStatus = request.json['strStatus'] if ('strStatus' in request.json) else None
        objResult = callMethod.fnPostProveedor(strNombre, strDireccion, strTelefono, strEmail, strStatus)
        return jsonify(objResult)
    except Exception as e:
        print("Error Post Proveedor: ",e)

@app.route('/sandec/nuevoLocatario', methods=['POST'])
def postLocatario():
    try:
        strNombreLocatario = request.json['strNombreLocatario'] if ('strNombreLocatario' in request.json) else None
        strNombreNegocio = request.json['strNombreNegocio'] if ('strNombreNegocio' in request.json) else None
        strTelefono = request.json['strTelefono'] if ('strTelefono' in request.json) else None
        strStatus = request.json['strStatus'] if ('strStatus' in request.json) else None
        objResult = callMethod.fnPostLocatario(strNombreLocatario, strNombreNegocio, strTelefono, strStatus)
        return jsonify(objResult)
    except Exception as e:
        print("Error Post Locatario: ",e)

@app.route('/sandec/categorias', methods=['GET'])
def getCategorias():
    try:
        objResult = callMethod.fnGetCategorias()
        return jsonify(objResult)
    except Exception as e:
        print("Error Get Categorias: ",e)

@app.route('/sandec/clientes', methods=['GET'])
def getClientes():
    try:
        objResult = callMethod.fnGetClientes()
        return jsonify(objResult)
    except Exception as e:
        print("Error Get Clientes: ",e)

@app.route('/sandec/compras', methods=['GET'])
def getCompras():
    try:
        objResult = callMethod.fnGetCompras()
        return jsonify(objResult)
    except Exception as e:
        print("Error Get Compras: ",e)

@app.route('/sandec/detalleCompra/<idCompra>', methods=['GET'])
def getDetalleCompra(idCompra):
    try:
        objResult = callMethod.fnGetDetalleCompra(idCompra)
        return jsonify(objResult)
    except Exception as e:
        print("Error Get Detalle Compras: ",e)

@app.route('/sandec/detalleVenta/<idVenta>', methods=['GET'])
def getDetalleVenta(idVenta):
    try:
        objResult = callMethod.fnGetDetalleVenta(idVenta)
        return jsonify(objResult)
    except Exception as e:
        print("Error Get Detalle Ventas: ",e)

@app.route('/sandec/prestamos', methods=['GET'])
def getPrestamos():
    try:
        objResult = callMethod.fnGetPrestamos()
        return jsonify(objResult)
    except Exception as e:
        print("Error Get Prestamos: ",e)

@app.route('/sandec/prestamosVendedor/<idVendedor>', methods=['GET'])
def getPrestamosVendedor(idVendedor):
    try:
        objResult = callMethod.fnGetPrestamosVendedor(idVendedor)
        return jsonify(objResult)
    except Exception as e:
        print("Error Get Prestamos Vendedor: ",e)

@app.route('/sandec/productos', methods=['GET'])
def getProductos():
    try:
        objResult = callMethod.fnGetProductos()
        return jsonify(objResult)
    except Exception as e:
        print("Error Get Productos: ",e)

@app.route('/sandec/proveedores', methods=['GET'])
def getProveedores():
    try:
        objResult = callMethod.fnGetProveedores()
        return jsonify(objResult)
    except Exception as e:
        print("Error Get Proveedores: ",e)

@app.route('/sandec/vendedores', methods=['GET'])
def getVendedores():
    try:
        objResult = callMethod.fnGetVendedores()
        return jsonify(objResult)
    except Exception as e:
        print("Error Get Vendedores: ",e)

@app.route('/sandec/ventas', methods=['GET'])
def getVentas():
    try:
        objResult = callMethod.fnGetVentas()
        return jsonify(objResult)
    except Exception as e:
        print("Error Get Ventas: ",e)

@app.route('/sandec/editarCategoria', methods=['PUT'])
def putCategoria():
    try:
        intIdCategoria = request.json['intIdCategoria'] if ('intIdCategoria' in request.json) else None
        strNombre = request.json['strNombre'] if ('strNombre' in request.json) else None
        strDescripcion = request.json['strDescripcion'] if ('strDescripcion' in request.json) else None
        strStatus = request.json['strStatus'] if ('strStatus' in request.json) else None
        objResult = callMethod.fnPutCategoria(intIdCategoria, strNombre, strDescripcion, strStatus)
        return jsonify(objResult)
    except Exception as e:
        print("Error Post Categoria: ",e)

@app.route('/sandec/editarCliente', methods=['PUT'])
def putCliente():
    try:
        intIdCliente = request.json['intIdCliente'] if ('intIdCliente' in request.json) else None
        strNombre = request.json['strNombre'] if ('strNombre' in request.json) else None
        strDireccion = request.json['strDireccion'] if ('strDireccion' in request.json) else None
        strTelefono = request.json['strTelefono'] if ('strTelefono' in request.json) else None
        strEmail = request.json['strEmail'] if ('strEmail' in request.json) else None
        strStatus = request.json['strStatus'] if ('strStatus' in request.json) else None
        objResult = callMethod.fnPutCliente(intIdCliente, strNombre, strDireccion, strTelefono, strEmail, strStatus)
        return jsonify(objResult)
    except Exception as e:
        print("Error Post Cliente: ",e)

@app.route('/sandec/editarProducto', methods=['PUT'])
def putProducto():
    try:
        intIdProducto = request.json['intIdProducto'] if ('intIdProducto' in request.json) else None
        strNombre = request.json['strNombre'] if ('strNombre' in request.json) else None
        strDescripcion = request.json['strDescripcion'] if ('strDescripcion' in request.json) else None
        floatPrecioCompra = request.json['floatPrecioCompra'] if ('floatPrecioCompra' in request.json) else None
        floatPrecioVenta = request.json['floatPrecioVenta'] if ('floatPrecioVenta' in request.json) else None
        intCantidadStock = request.json['intCantidadStock'] if ('intCantidadStock' in request.json) else None
        intCantidadMinima = request.json['intCantidadMinima'] if ('intCantidadMinima' in request.json) else None
        intIdCategoria = request.json['intIdCategoria'] if ('intIdCategoria' in request.json) else None
        strStatus = request.json['strStatus'] if ('strStatus' in request.json) else None
        objResult = callMethod.fnPutProducto(intIdProducto, strNombre, strDescripcion, floatPrecioCompra,floatPrecioVenta, intCantidadStock, intCantidadMinima, intIdCategoria, strStatus)
        return jsonify(objResult)
    except Exception as e:
        print("Error Post Producto: ",e)

@app.route('/sandec/editarProveedor', methods=['PUT'])
def putProveedor():
    try:
        intIdProveedor = request.json['intIdProveedor'] if ('intIdProveedor' in request.json) else None
        strNombre = request.json['strNombre'] if ('strNombre' in request.json) else None
        strDireccion = request.json['strDireccion'] if ('strDireccion' in request.json) else None
        strTelefono = request.json['strTelefono'] if ('strTelefono' in request.json) else None
        strEmail = request.json['strEmail'] if ('strEmail' in request.json) else None
        strStatus = request.json['strStatus'] if ('strStatus' in request.json) else None
        objResult = callMethod.fnPutProveedor(intIdProveedor, strNombre, strDireccion, strTelefono, strEmail, strStatus)
        return jsonify(objResult)
    except Exception as e:
        print("Error Post Producto: ",e)

@app.route('/sandec/editarVendedor', methods=['PUT'])
def putVendedor():
    try:
        intIdVendedor = request.json['intIdVendedor'] if ('intIdVendedor' in request.json) else None
        strNombre = request.json['strNombre'] if ('strNombre' in request.json) else None
        strNombreNegocio = request.json['strNombreNegocio'] if ('strNombreNegocio' in request.json) else None
        strTelefono = request.json['strTelefono'] if ('strTelefono' in request.json) else None
        strStatus = request.json['strStatus'] if ('strStatus' in request.json) else None
        objResult = callMethod.fnPutVendedor(intIdVendedor, strNombre, strNombreNegocio, strTelefono, strStatus)
        return jsonify(objResult)
    except Exception as e:
        print("Error Post Producto: ",e)


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=9005, debug=True, threaded=True)
