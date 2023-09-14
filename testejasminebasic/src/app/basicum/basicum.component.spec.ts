import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicumComponent } from './basicum.component';

describe('BasicumComponent', () => {
  let component: BasicumComponent;
  let fixture: ComponentFixture<BasicumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicumComponent]
    });
    fixture = TestBed.createComponent(BasicumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('teste de texto escrito', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    console.log('teste de texto escrito',compiled.querySelector('.basic')?.textContent);
    expect(compiled.querySelector('.basic')?.textContent).toContain('basicum works!');
  
  });

  it('teste de igualdade entre objetos', () => {

    let nome1 = {nome1:'joao',nome2:'maria',nome3:'jose'};
    let nome2 = {nome1:'joao',nome2:'maria',nome3:'jose'};
    expect(nome1).toBe(nome1);
    // expect(nome1).toBe(nome2); //da erro pois objetos são diferentes
  });

  it('verifica se variavel foi definida',()=>{
    let x:number;
    x = 0;
    expect(x).toBeDefined();
  });

  it('verifica se um erro foi lançado',()=>{
    function erro(){
      throw new Error('erro');
    }
    expect(erro).toThrow();
  });

  it('teste com expressão regular',()=>{
    let x:string;
    x = 'teste';
    expect(x).toMatch(/teste/);
  });

  it('verifica proximidade entre numeros',()=>{
    expect(1.2).toBeCloseTo(1.2);
  });

  it('verifica se numero1 é menor que n2',()=>{
    expect(1).toBeLessThan(2);
  });

  it('verifica se numero1 é maior que n2',()=>{
    expect(2).toBeGreaterThan(1);
  });

  it('verifica se é nan ',()=>{
    expect(NaN).toBeNaN();
  });

  it('verifica se um numero é null',()=>{
    let x;
    x = null;
    expect(x).toBeNull();
  });

  it('verifica se variavel foi definida',()=>{
    let x
    expect(x).toBeUndefined();
  });

  it('verifica se contem ',()=>{
    expect('123').toContain('12');
  });

  it('testa se dois valores são diferentes',()=>{
    expect(1).not.toBe(2);
  });

  it('teste de igualdae', () => {
    expect([1,2,3,4]).toEqual([1,2,3,4]);
  });

  it('testa se um valor é true', () => {
    expect(true).toBeTruthy();
    expect(true).toBe(true);
  });

  it('testa se um valor é falos', () => {
    expect(false).toBeFalsy();
  });

  it('testa se valor e null', () => {
    expect(null).toBeNull();
  });

  it('testa se valor e undefined', () => {
    expect(undefined).toBeUndefined();
  });
  
  it('teste de valor numerico definido', () => {
    expect(1).toBeDefined();
  });

  it('testa se uma variavel é falsa', () => {
    expect(false).toBeFalsy();
  });


});
