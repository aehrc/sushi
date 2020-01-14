import { Profile, Extension, Instance, FshValueSet, CodeSystem } from '../fshtypes';

export class FSHDocument {
  readonly aliases: Map<string, string>;
  readonly profiles: Map<string, Profile>;
  readonly extensions: Map<string, Extension>;
  readonly instances: Map<string, Instance>;
  readonly valueSets: Map<string, FshValueSet>;
  readonly codeSystems: Map<string, CodeSystem>;

  constructor(public readonly file: string) {
    this.aliases = new Map();
    this.profiles = new Map();
    this.extensions = new Map();
    this.instances = new Map();
    this.valueSets = new Map();
    this.codeSystems = new Map();
  }
}
