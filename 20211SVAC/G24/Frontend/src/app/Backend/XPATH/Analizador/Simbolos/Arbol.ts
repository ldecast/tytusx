import tablaSimbolos from './tablaSimbolos';
import { Instruccion } from '../Abstracto/Instruccion';
import Errores from '../Excepciones/Errores';
import { reporteTabla } from '../Reportes/reporteTabla';
import obtenerValor from '../Reportes/cambiarTipo';
export default class Arbol {
  private instrucciones: Array<Instruccion>;
  private errores: Array<Errores>;
  private funciones: Array<Instruccion>;
  public listaSimbolos: Array<reporteTabla>;

  public getSimbolos(): Array<reporteTabla> {
    return this.listaSimbolos;
  }
  public actualizarTabla(
    identificador: string,
    valor: string,
    linea: string,
    entorno: string,
    columna: string
  ): boolean {
    for (var elemento of this.listaSimbolos) {
      if (
        elemento.getIdentificador().toString() == identificador.toLowerCase() &&
        elemento.getEntorno().toString() == entorno.toString()
      ) {
        elemento.setValor(valor);
        elemento.setLinea(linea);
        elemento.setColumna(columna);
        return true;
      }
    }
    return false;
  }
  public BuscarTipo(identificador: string): string {
    for (var elemento of this.listaSimbolos) {
      if (elemento.getIdentificador() == identificador.toLowerCase()) {
        return elemento.getForma().toString();
      }
    }
    return 'as';
  }
  public getfunciones(): Array<Instruccion> {
    return this.funciones;
  }
  public setfunciones(value: Array<Instruccion>) {
    this.funciones = value;
  }
  public geterrores(): Array<Errores> {
    return this.errores;
  }
  public seterrores(value: Array<Errores>) {
    this.errores = value;
  }

  public getinstrucciones(): Array<Instruccion> {
    return this.instrucciones;
  }
  public setinstrucciones(value: Array<Instruccion>) {
    this.instrucciones = value;
  }
  private consola: String = '';
  public getconsola(): String {
    return this.consola;
  }
  public setconsola(value: String) {
    this.consola = value;
  }
  public actualizaConsola(uptodate: String) {
    this.consola = `${this.consola}${uptodate}\n`;
  }
  private tablaGlobal: tablaSimbolos;
  public gettablaGlobal(): tablaSimbolos {
    return this.tablaGlobal;
  }
  public settablaGlobal(value: tablaSimbolos) {
    this.tablaGlobal = value;
  }

  constructor(instrucciones: Array<Instruccion>) {
    this.instrucciones = instrucciones;
    this.consola = '';
    this.tablaGlobal = new tablaSimbolos();
    this.errores = new Array<Errores>();
    this.funciones = new Array<Instruccion>();
    this.listaSimbolos = new Array<reporteTabla>();
  }
}
