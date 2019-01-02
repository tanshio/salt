//precision mediump float;
//
//#define R_LUMINANCE 0.298912
//#define G_LUMINANCE 0.586611
//#define B_LUMINANCE 0.114478
//
//varying vec2 vTextureCoord;
//uniform sampler2D uSampler;
//const vec3 monochromeScale = vec3(R_LUMINANCE, G_LUMINANCE, B_LUMINANCE);
//
//void main() {
//  vec2 cord = vTextureCoord;
//  vec4 color = texture2D(uSampler, cord);
//  float grayColor = dot(color.rgb, monochromeScale);
//  color = vec4(vec3(grayColor), 1.0);
//  gl_FragColor = vec4(color);
//}

precision mediump float;
uniform float time; // time
uniform vec2  r; // resolution

void main(void){
    float r = abs(sin(time * 0.5));
    float g = abs(cos(time * 0.5));
    float b = (r + g) / 2.0;
    gl_FragColor = vec4(r, g, b, 1.0);
}
