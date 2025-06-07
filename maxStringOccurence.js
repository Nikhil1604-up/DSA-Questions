const str = 'nikhil'
const getMaxOccurence = ()=>{
    let map = {}
    str.split('').forEach((ele)=>{
        map[ele] = map[ele] ? map[ele] + 1:1
    })
    
    let max=1
    let char=str[0]
    
    for(let key in map){
        if(map[key] > max){
            max=map[key]
            char=key
        }
    }
    return `${char} ${max}`
}

const res = getMaxOccurence()
