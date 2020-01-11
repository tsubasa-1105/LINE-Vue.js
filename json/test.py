import json
import codecs

result = list()

f = open('data.csv','r')
key = f.readline().rstrip().split(",")

for w in f.readlines():
    tmp = dict()
    tmp2 = dict()
    data = w.rstrip().split(",")
    for i in range(len(data)):
        if i <= 4:
            if data[i] == "null":
                tmp[key[i]] = None
            else:
                tmp[key[i]] = data[i]
        else:
            if data[i] == "null":
                tmp2[key[i]] = None
            else:
                tmp2[key[i]] = data[i]
    tmp["id"] = tmp2
    result.append(tmp)
f.close()

f = codecs.open('out.json','w','utf-8')
json.dump(result,f,indent=4,ensure_ascii=False)
f.close()