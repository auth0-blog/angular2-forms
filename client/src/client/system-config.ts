const barrels: string[] = [
  'app',
  'app/shared',
  'app/form-control',
  'app/simple-form',
  'app/validated-form',
  'app/custom-validated-form',
  /** @cli-barrel */
];

function createPackageConfig(barrelList: string[]): any {
  return barrelList.reduce((barrelConfig: any, barrelName: string) => {
    barrelConfig[barrelName] = {
      format: 'register',
      defaultExtension: 'js',
      main: 'index'
    };
    return barrelConfig;
  }, {});
}


// Add your custom SystemJS configuration here.
export const config: any = {
  packages: Object.assign({
    // Add your custom SystemJS packages here.
  }, createPackageConfig(barrels))
};
