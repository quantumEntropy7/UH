function dft(x){
    let X=[]; // x is signal or vals, X(return value of this function) is dft of x
    const N = x.length;
    for(let k=0; k<N; k++){
        let real=0;
        let img=0;
        for(let n=0;n<N; n++){
            let arg = (TWO_PI*k*n)/N;
             real += x[n]*cos(arg);
             img -= x[n]*sin(arg); 
        }
        real = real/N;
        img = img/N;

        let freq = k;
        let amp = sqrt(real*real+img*img);
        let phase=atan2(img,real);

        X[k]={real,img,freq,amp,phase}; //structure or object complex number
                
    }
    return X;
}