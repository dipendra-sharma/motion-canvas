import {Layer} from 'konva/lib/Layer';
import {Project} from './Project';

export interface SceneRunner {
  (layer: Layer, project: Project): Generator;
}

export class Scene {
  public constructor(
    private project: Project,
    private layer: Layer,
    private runner: SceneRunner,
  ) {}

  public run(): Generator {
    return this.runner(this.layer, this.project);
  }
}