declare module "to-ico" {
  function toIco(input: Buffer | Buffer[]): Promise<Buffer>;
  export = toIco;
}
