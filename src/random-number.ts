export async function getRandomNumber(): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      setTimeout(() => {
        const luckyNumber = Math.round(Math.random() * 40);
        if (luckyNumber < 40) {
          resolve(luckyNumber);
        } else {
          reject(luckyNumber);
        }
      }, 2000);
    });
  }